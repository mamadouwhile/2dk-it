# 2DK IT

Site vitrine Next.js pour 2DK IT.

## Prérequis

- Node.js 20+
- npm

## Installation

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Configuration de l’email de contact

Le formulaire de contact repose sur une configuration SMTP côté serveur. En production, il est recommandé d’utiliser un provider transactionnel dédié plutôt qu’une boîte mail classique.

### Variables d’environnement

Copiez `.env.example` vers `.env.local`, puis renseignez au minimum :

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
CONTACT_RECEIVER_EMAIL=contact@votredomaine.fr
CONTACT_SENDER_EMAIL=no-reply@votredomaine.fr
```

### Option recommandée : provider transactionnel

Vous pouvez utiliser l’un des providers suivants :

- Resend
- SendGrid
- Postmark
- Amazon SES

### Étapes de mise en place

1. **Créer le compte provider**
   - Ouvrez un compte sur Resend, SendGrid, Postmark ou Amazon SES.

2. **Vérifier le domaine d’envoi**
   - Ajoutez votre domaine d’envoi dans le provider.
   - Validez le domaine avec les enregistrements DNS fournis.

3. **Configurer SPF, DKIM et DMARC**
   - Ajoutez les enregistrements DNS demandés par le provider.
   - Utilisez un SPF restrictif pour éviter le spoofing.
   - Activez DKIM pour signer les messages.
   - Ajoutez une politique DMARC adaptée à votre contexte.

4. **Renseigner les variables d’environnement**
   - Si vous utilisez SMTP, complétez `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`.
   - Définissez `CONTACT_SENDER_EMAIL` avec une adresse liée à votre domaine.
   - Définissez `CONTACT_RECEIVER_EMAIL` sur la boîte qui reçoit les demandes.

5. **Tester l’envoi**
   - Soumettez le formulaire de contact en préproduction.
   - Vérifiez la réception du message interne et de l’accusé de réception.
   - Contrôlez les logs serveur si une erreur SMTP apparaît.

### Exemple selon le provider

#### Resend

- Créez une clé API.
- Vérifiez votre domaine.
- Utilisez l’adresse d’expéditeur autorisée par Resend.
- Si vous conservez le transport SMTP, renseignez les identifiants fournis par le provider ou passez à leur API transactionnelle.

#### SendGrid

- Créez un sender authentifié.
- Configurez SPF et DKIM.
- Renseignez l’API key ou les identifiants SMTP selon votre implémentation.

#### Postmark

- Vérifiez le sender signature.
- Publiez les enregistrements DNS fournis.
- Utilisez le relais SMTP ou l’API selon votre préférence.

#### Amazon SES

- Vérifiez le domaine et l’adresse d’expéditeur.
- Sortez du sandbox si nécessaire.
- Configurez SPF, DKIM et, si possible, DMARC.

## Développement

```bash
npm run lint
npm run build
```

## Déploiement

Avant la mise en production :

- vérifiez les variables d’environnement email ;
- assurez-vous que le site est servi en HTTPS ;
- testez le formulaire de contact ;
- contrôlez la délivrabilité des emails.

## En-têtes de sécurité HTTP

Le site envoie par défaut les en-têtes suivants via Next.js :

- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Content-Security-Policy`

La CSP de base est volontairement compatible avec l’application actuelle de Next.js et avec le script JSON-LD de données structurées. Si vous ajoutez plus tard des scripts tiers comme Google Analytics, Matomo, Plausible, Hotjar ou un widget de cookies, prévoyez les ajustements suivants :

- autoriser explicitement leurs domaines dans `script-src` et, si nécessaire, `connect-src` et `img-src` ;
- garder le garde-fou `components/consent-script.tsx` pour ne charger ces scripts qu’après consentement ;
- migrer vers un nonce ou des hashes CSP si vous souhaitez retirer `unsafe-inline` de `script-src` ;
- vérifier aussi les appels réseau liés aux pixels, collecteurs de statistiques et iframes éventuels.

En cas de script tiers, il faut tester la page d’accueil, la page Contact et le bandeau cookies afin de vérifier que le chargement conditionnel reste cohérent.

## Gérer le contenu sans toucher au code

Le portfolio et les offres de services sont désormais externalisés dans des fichiers JSON:

- `content/portfolio.json`
- `content/services.json`

### Modifier le contenu

1. Ouvrez le fichier JSON concerné.
2. Modifiez uniquement les textes, libellés ou listes de contenu.
3. Conservez la structure des champs existants pour rester compatible avec les types TypeScript.
4. Lancez ensuite `npm run build` pour vérifier que le schéma reste valide.

### Pourquoi cette structure

Ces fichiers jouent le rôle de source de vérité côté contenu. Le code d’affichage lit ces données via des fonctions utilitaires typées, ce qui facilite ensuite une migration vers un CMS headless comme Sanity ou Strapi.

### Préparer une future intégration CMS

Quand vous serez prêt à connecter un CMS:

- remplacez les loaders JSON dans `lib/portfolio.ts` et `lib/services.ts` par un adaptateur de données;
- conservez les types TypeScript existants comme contrat d’entrée;
- mappez les champs du CMS vers les mêmes interfaces (`PortfolioProject`, `WebOffer`, `SupportItem`, `ChooseStep`).

