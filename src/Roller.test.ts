import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Test if the default last value is zero", () => {
    let obj:Roller=new Roller(6);
    let last:Number=obj.last()
    expect(last).toBe(0);
  });

  test("Test if the last value is appropriate", () => {
    let obj:Roller=new Roller(6);

    let last:Number=obj.roll(3);
    expect(last).toBe(3);
  });
  
  test("Test if the roller returns same value if the roll is appropriate", () => {
    let obj:Roller=new Roller(6);
    let roll:Number=obj.roll(3);
    expect(roll).toBe(3);
  });

  test("Test if the roller returns same value if the roll is appropriate", () => {
    let obj:Roller=new Roller(6);
    let roll:Number=obj.roll(-50);
    expect(roll).toBe(0);
  });

  test("Test if the appropriate number of faces has been set", () => {
    let obj:Roller=new Roller(4);
    let face:Number=obj.getFaces();
    expect(face).toBe(4);
  });
  test("Test if the faces sets to default value of 6 if invalid faces is passed", () => {
    let obj:Roller=new Roller(-10);
    let face:Number=obj.getFaces();
    expect(face).toBe(6);
  });


});