import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

type PlaceholderPanelProps = {
  title: string;
  description?: string;
  footer?: ReactNode;
};

export function PlaceholderPanel({
  title,
  description = "Contenu à intégrer",
  footer,
}: PlaceholderPanelProps) {
  return (
    <Reveal>
      <Card className="p-6 sm:p-7">
        <CardHeader className="space-y-3">
          <Tag>Placeholder</Tag>
          <h2 className="ds-subheading text-xl">{title}</h2>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        </CardHeader>

        {footer ? (
          <CardBody className="pt-3 text-sm text-slate-600">{footer}</CardBody>
        ) : null}
      </Card>
    </Reveal>
  );
}