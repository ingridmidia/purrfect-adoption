export default function Resources() {
  return (
    <div>
      <h1 className="flex justify-center pt-6 text-3xl text-violet-800 font-bold">
        ADDITIONAL RESOURCES
      </h1>
      <div className="container mx-auto p-8">
        <ul className="list-disc space-y-4">
          <li>
            <a
              href="https://www.aspcapetinsurance.com/resources/how-to-introduce-a-cat-to-a-new-home/"
              className="hover:underline hover:text-violet-500  lg:text-lg"
            >
              How to Introduce a Cat to a New Home (ASPCA)
            </a>
          </li>
          <li>
            <a
              href="https://bestfriends.org/stories/features/introducing-cats-each-other"
              className="hover:underline hover:text-violet-500  lg:text-lg"
            >
              Introducing Cats to Each Other (Best Friends Animal Society)
            </a>
          </li>
          <li>
            <a
              href="https://www.oregonhumane.org/wp-content/uploads/5.31.17_-Introducing-a-new-cat-to-resident-pets.pdf"
              className="hover:underline hover:text-violet-500  lg:text-lg"
            >
              Introducing a New Cat to Resident Pets (The Humane Society of the
              United States)
            </a>
          </li>
          <li>
            <a
              href="https://www.avma.org/"
              className="hover:underline hover:text-violet-500  lg:text-lg"
            >
              American Veterinary Medical Association
            </a>
          </li>
          <li>
            <a
              href="https://www.petmd.com/"
              className="hover:underline hover:text-violet-500  lg:text-lg"
            >
              PetMD
            </a>
          </li>
          <li>
            <a
              href="https://www.petfinder.com/"
              className="hover:underline hover:text-violet-500  lg:text-lg"
            >
              Petfinder
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
