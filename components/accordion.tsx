import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionProps } from "@/lib/type";

export default function AccordionComponent({title, content}: AccordionProps){
    return(
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xs"> {title} </AccordionTrigger>
                <AccordionContent>
                    { content }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}