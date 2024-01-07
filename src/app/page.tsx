import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets instantly after the payment has been processed.",
    icon: "/images/perks/verified-quality.svg",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "All assets are verified by our team to ensure the highest quality standards. Not happy with your purchase? Get a refund.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've partnered with OneTreePlanted to plant a tree for every purchase made on our platform.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            You marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Hippo DigitalMarket. Every assets on our platform is
            verified by our team to ensure or highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={cn(buttonVariants())}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map(({ name, description, Icon, icon }) => (
              <div
                key={name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full text-blue-900 bg-blue-100 ">
                    <Icon className="w-1/3 h-1/3" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
