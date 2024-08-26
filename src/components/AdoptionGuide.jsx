import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AdoptionGuide() {
  return (
    <div>
      <h1 className="flex justify-center pt-6 text-3xl text-violet-800 font-bold">
        ADOPTION GUIDE
      </h1>
      <Accordion type="single" collapsible className="w-full p-8">
        <AccordionItem value="item-1">
          <AccordionTrigger className="lg:text-xl">
            Step 1: Research and Preparation
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            1. Assess Your Readiness: Ensure you’re ready for the responsibility
            of pet ownership. Cats need attention, time, and financial resources
            for food, vet care, and other needs.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            2. Consider Your Lifestyle: Think about the type of cat that fits
            your lifestyle. Factors like energy levels, grooming needs, and any
            allergies should be considered.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            3. Prepare Your Home: Cat-proof your living space by removing
            hazards and setting up a designated area with essentials like a
            litter box, scratching posts, food and water dishes, and a cozy bed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="lg:text-xl">
            Step 2: Finding a Cat
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            1. Research Shelters and Rescues: Look for local animal shelters,
            rescue organizations, or adoption centers. Many have websites or
            social media pages where you can see available cats.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            2. Visit Shelters: Spend some time visiting different shelters or
            adoption events to meet cats. Staff can help match you with a cat
            that fits your preferences and lifestyle.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            3. Consider Online Platforms: Websites like Petfinder or Adopt-a-Pet
            allow you to search for cats available for adoption in your area.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="lg:text-xl">
            Step 3: Meeting Cats
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            1. Interact with Cats: Spend time interacting with cats to find one
            that you connect with. Observe their behavior and see how they react
            to you.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            2. Ask Questions: Talk to the shelter or rescue staff about the
            cat’s history, temperament, health, and any special needs.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            3. Consider Compatibility: If you have other pets, consider how a
            new cat will fit into the existing dynamic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="lg:text-xl">
            Step 4: Adoption Process
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            1. Fill Out an Application: Complete an adoption application form.
            This may include questions about your home environment, pet
            experience, and references.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            2. Home Visit or Interview: Some shelters may require a home visit
            or interview to ensure your home is suitable for a cat.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            3. Adoption Fee: Pay the adoption fee, which often includes
            vaccinations, spaying/neutering, and sometimes a microchip.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            4. Finalize the Adoption: Once approved, you’ll finalize the
            adoption paperwork and make arrangements for bringing your new cat
            home.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="lg:text-xl">
            Step 5: Bringing Your Cat Home
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            1. Prepare Your Home: Set up a quiet and secure space for your new
            cat to acclimate, including their litter box, food, and water.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            2. Transport Safely: Use a cat carrier to transport your new pet
            home. Make the journey as calm and comfortable as possible.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            3. Introduce Gradually: If you have other pets, introduce them to
            the new cat slowly to ensure a smooth transition. Supervise
            interactions and provide separate spaces if needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="lg:text-xl">
            Step 6: Post-Adoption Care
          </AccordionTrigger>
          <AccordionContent className="lg:text-lg">
            1. Veterinary Visit: Schedule a vet appointment for a health
            check-up and to discuss any immediate needs or concerns.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            2. Establish a Routine: Develop a feeding, grooming, and play
            routine to help your cat feel secure and happy.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            3. Monitor Behavior: Pay attention to your cat’s behavior and
            health. Any changes or concerns should be discussed with your vet.
          </AccordionContent>
          <AccordionContent className="lg:text-lg">
            4. Provide Enrichment: Offer toys, scratching posts, and interaction
            to keep your cat mentally and physically stimulated.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AdoptionGuide;
