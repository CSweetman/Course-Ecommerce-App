import React from "react"
import { Link } from "react-router-dom"
import backgroundImages from "./assets/home-image.png"
import Jane from "./assets/testimonials-images/jane.jpg"
import Chris from "./assets/testimonials-images/chris.jpg"
import Leslie from "./assets/testimonials-images/Leslie.jpg"
import Mike from "./assets/testimonials-images/mike.jpg"

const testimonials = [
    {
        id: 1,
        text: "FewLearns have been a great resource for me. I've learned so much form their courses. I would recommend them to anyone.",
        author: "Jane Steiner",
        title: "BP Sales at Google",
        imageURL: Jane,
    },
    {
        id: 2,
        text: "The K8s course has been a game changer for me. This is how you explain complex topics in a simple way. Thanks for the great content, FewLearns!",
        author: "Chris Ambrose",
        title: "Lead marketer at Netflix",
        imageUrl: Chris,
    },
    {
        id: 3,
        text: "This is an amazing course. Just finished the React course and I'm already seeing the benefits. Thanks for the great content.",
        author: "Leslie Winn",
        title: "Co-founder of Acme Inc",
        imageUrl: Leslie,
    },
    {
        id: 4,
        text: "An useful resource for learning web development.",
        author: "Mike Winn",
        title: "Co-founder of Acme Inc",
        imageUrl: Mike,
    },
]

const HomePage = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center">
                {/* Welcome Page */}
                <div className="flex flex-col justify-center items-center bg-style py-48 px-10">
                    <div className="text-center">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-300">
                                Announcing our list of our free resources.{" "}
                                <Link to={"/blogs"} className="font-semibold text-green-300">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Read Blogs. <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                        <h1 className="text-3xl text-gray-100 font-extrabold sm:text-6xl">
                            Welcome to,
                            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                {" "}
                                FewvLearns{" "}
                            </span>
                            !
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-200">
                            We are incredibly excited to announce our first free resource, a guide for building modern
                            web applications.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full rounded-full border text-white hover:text-black border-green-300 px-12 py-3 text-sm font-medium
                                hover:bg-green-300 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/blogs"
                            >
                                Read Blogs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
