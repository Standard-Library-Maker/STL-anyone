import stl from 'lib/stl';
import React from "react";
import LandingTemplate from 'components/landing/LandingTemplate';

const Test = () => {
  return (
    <LandingTemplate/>
  );
};

const testcode = () => {
  /* Queue Test Code */
  console.log('\nqueue test start');
  let s1 = new stl.Queue.ArrQueue();
  s1.push("hello world");
  s1.push("hello javascript");
  s1.push("this is queue");
  s1.state();
  console.log(`front : ${s1.front()}`);
  console.log(`back : ${s1.back()}`);
  console.log(`size : ${s1.size()}`);

  console.log(`pop : ${s1.pop()}`);
  console.log(`front : ${s1.front()}`);
  console.log(`back : ${s1.back()}`);
  console.log(`size : ${s1.size()}`);
  s1.state();
  s1.clear();
  console.log('=== after clear ===')
  s1.state();

  /* Queue test code2 (Circular) */
  console.log('\nCircular queue test start');
  let s2 = new stl.Queue.CircularQueue(3);
  s2.push("hello world");
  s2.push("hello javascript");
  s2.push("this is circular queue");
  s2.state();
  console.log(`front : ${s2.front()}`);
  console.log(`back : ${s2.back()}`);
  console.log(`size : ${s2.size()}`);

  console.log(`pop : ${s2.pop()}`);
  s2.state();
  console.log(`front : ${s2.front()}`);
  console.log(`back : ${s2.back()}`);
  console.log(`size : ${s2.size()}`);

  console.log(`pop : ${s2.pop()}`);
  s2.state();
  console.log(`front : ${s2.front()}`);
  console.log(`back : ${s2.back()}`);
  console.log(`size : ${s2.size()}`);

  s2.clear();
  console.log("=== after clear ===");
  s2.state();
};

export default Test