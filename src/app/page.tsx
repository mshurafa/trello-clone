import Image from "next/image";
import { Header } from "@/layout";
import { Board, Chat } from "@/components";
import { Suspense } from "react";

export default function Home() {
    return (
        <main>
            <div
                className="absolute left-0 top-0 w-full h-96 bg-gradient-to-b from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
            <Header />
            <Chat />
            <Suspense fallback={<p>Loading weather...</p>} >
                <Board />
            </Suspense>


        </main>
    );
}
