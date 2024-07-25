import Button from "./Button";

function LearnMore() {
  return (
    <>
      <div className="mr-5 w-[12.5rem] pt-[2.5rem] learnMoreContainer">
        <div className="flex items-center justify-center">
          <p className="font-acme text-2xl ">
            “Ek kadam <br />
            sehat ki or, <br />
            Because healthly
            <br /> life is our <br />
            responsibility”
          </p>
        </div>
        <Button  marginTop={'mt-12'} width={"w-full"}/>
      </div>
    </>
  );
}

export default LearnMore;
