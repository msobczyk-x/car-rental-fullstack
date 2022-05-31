import React, { Component } from "react";
import "./Faq.scss";
import { Accordion, Icon } from "semantic-ui-react";

export default class Faq extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          How should I find a cheap rental car?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 0}
          className="accordion-content"
        >
          <p>
            Here are some tips on how to save money when renting a car: Compare
            lots of cheap rental car rates to get the best price. Prepay for
            your car instead of paying at pickup to lock in cheaper rates and
            get the most savings. Set a price drop alert and get an email when
            the base rate is low. Many times renting a car at the airport can be
            more expensive. Consider looking for cars in nearby locations for
            big savings. Off-airport rental companies may also offer shuttle
            service from the terminal to your rental location. Know what you
            need, including the fuel and mileage you'll use and the size car you
            want before making a reservation. Check and compare any other costs
            associated with the rental car, such as fees for young or senior
            drivers, or fees for including additional drivers. Book in advance
            to take advantage of available coupons and deals.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Do car rental locations accept debit cards?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 1}
          className="accordion-content"
        >
          <p>
            Yes, some rental companies accept debit cards for reservations,
            though they may ask for additional identification and proof of
            insurance when you book. Even if you can pay with a debit card, some
            car rental locations require a credit card for the deposit. Be sure
            to check the terms and conditions. If you don't own a credit card,
            you may not be permitted to rent a car. Cash, prepaid cards, and
            gift cards are never accepted for reservations
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Do I need insurance to rent a vehicle?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 2}
          className="accordion-content"
        >
          <p>
            Yes, you must be an insured driver in order to drive a rental car.
            If you have personal car insurance, you should check to see whether
            it covers rental vehicles (and be sure to ask if there are any
            restrictions, such as vehicle size or international pickups). If you
            don’t have personal insurance coverage, consider checking your
            credit card – it may offer a rental car policy if you use it to pay
            for the rental.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Do all rental car companies require a deposit?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 3}
          className="accordion-content"
        >
          <p>
            Many car rental companies do ask for a deposit, and deposit amounts
            will differ by company and car class. Luxury rentals will require a
            higher deposit than minivans or economy car rentals. Be sure to have
            a credit card available if you think you’ll need to cover a deposit.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What kind of car is best for me?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 4}
          className="accordion-content"
        >
          <p>
            Economy car Best for: Lower costs and smaller groups Category
            includes: Toyota Yaris, Ford Fiesta or similar SUV Best for: Longer
            day trips with more people Category includes: Audi Q7, Ford Escape,
            or similar Luxury Best for: Romantic couples seeking a memorable
            getaway Category includes: Chrysler 300, Buick Lacrosse, or similar
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          How old do I have to be to get a rental car?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 5}
          className="accordion-content"
        >
          <p>
          In most countries, you must be between 25 and 65 years old to rent cars. You might be able to get cheap car rentals or discounts if you’re outside of this age range, but you may need to pay an additional fee or purchase additional insurance.
          </p>
        
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          How do you acquire a car?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 6}
          className="accordion-content"
        >
        
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What you need to know about renting a car ?
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 7}
          className="accordion-content"
        >
          <p>
          Need to rent a car for your next vacation? Before booking, take a look at the following answers to questions commonly asked by our customers.
          </p>
         
        </Accordion.Content>
      </Accordion>
    );
  }
}
