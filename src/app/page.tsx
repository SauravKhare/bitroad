import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<div className="h-screen flex justify-center items-center my-7">
			<h1>bitroad begins!</h1>
			<Button variant="reverse">I am a button</Button>
			<Input placeholder="I am an input"></Input>
		</div>
	);
}
