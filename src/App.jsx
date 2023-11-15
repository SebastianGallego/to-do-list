import confetti from "canvas-confetti";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  User,
} from "@nextui-org/react";

function App() {
  return (
    <>
      <div className="bg-slate-800  h-screen w-screen flex flex-col items-center gap-5 ">
        <Button
          className="bg-fuchsia-500 hover:bg-fuchsia-900 w-[150px]"
          onClick={() => confetti()}
          color=""
          variant="light"
        >
          Confetti
        </Button>

        <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          className="w-[250px] h-[50px] bg-orange-500 font-bold"
        />

        <div className="px-6 container mx-auto ">...</div>

        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"Orange"}
              className="w-full object-cover h-[140px]"
              src={"/images/fruit-1.jpeg"}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{"Orange"}</b>
            <p className="text-default-500">{"$5.50"}</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
