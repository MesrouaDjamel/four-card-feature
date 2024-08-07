import Container from "@/components/Container";
import Intro from "@/components/Intro";
import ListCard from "@/components/ListCard";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-VeryLightGray flex-col items-center  ">
      <Container>
        <Intro />
        <ListCard/>
      </Container>

    </main>
  );
}









