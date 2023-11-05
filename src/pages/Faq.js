import React from 'react'
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Faq() {
  return (
    <div>
      <UncontrolledAccordion defaultOpen="1">
  <AccordionItem>
    <AccordionHeader targetId="1">
      FAQ 1
    </AccordionHeader>
    <AccordionBody accordionId="1">
        FAQ 1 answer
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      FAQ 2
    </AccordionHeader>
    <AccordionBody accordionId="2">
      FAQ 2 answer
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      FAQ 3
    </AccordionHeader>
    <AccordionBody accordionId="3">
      FAQ 3 answer
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="4">
      FAQ 4
    </AccordionHeader>
    <AccordionBody accordionId="4">
      FAQ 4 answer
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="5">
      FAQ 5
    </AccordionHeader>
    <AccordionBody accordionId="5">
      FAQ 5 answer
    </AccordionBody>
  </AccordionItem>
</UncontrolledAccordion>
    </div>
  )
}

export default Faq