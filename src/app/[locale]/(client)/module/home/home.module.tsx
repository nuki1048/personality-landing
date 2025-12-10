import { HeroComponent } from "./elements/hero/hero.component";
import { HowItWorksComponent } from "./elements/how-it-works/how-it-works.component";
import { FooterComponent } from "./elements/footer/footer.component";
import { FeaturesComponent } from "./elements/features/features.component";
import { WhatYouWillReceiveComponent } from "./elements/what-you-will-receive/what-you-will-receive.component";

export function HomeModule() {
  return (
    <>
      <main className="container flex-grow">
        <HeroComponent />
        <FeaturesComponent />
        <HowItWorksComponent />
        <WhatYouWillReceiveComponent />
        <FooterComponent />
      </main>
    </>
  );
}
