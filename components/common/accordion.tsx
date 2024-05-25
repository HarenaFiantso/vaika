import { AccordionProps } from '@/lib/type';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AccordionComponent({ title, content, icon }: AccordionProps) {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='flex text-xs'>
          <div className='flex gap-3'>
            <span className='rotate-0'>{icon}</span>
            <p>{title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
