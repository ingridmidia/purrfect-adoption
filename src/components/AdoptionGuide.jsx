import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AdoptionGuide() {
  return (
    <Accordion type="single" collapsible className="w-full p-8">
      <AccordionItem value="item-1">
        <AccordionTrigger>Step 1: Research and Preparation</AccordionTrigger>
        <AccordionContent>
          1. Assess Your Readiness: Ensure you’re ready for the responsibility of
          pet ownership. Cats need attention, time, and financial resources for
          food, vet care, and other needs.
        </AccordionContent>
        <AccordionContent>
          2. Consider Your Lifestyle: Think about the type of cat that fits your
          lifestyle. Factors like energy levels, grooming needs, and any
          allergies should be considered.
        </AccordionContent>
        <AccordionContent>
          3. Prepare Your Home: Cat-proof your living space by removing hazards
          and setting up a designated area with essentials like a litter box,
          scratching posts, food and water dishes, and a cozy bed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AdoptionGuide;
