const base = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    street: '123 Main Street',
    zipCode: '10001',
  },
  hobbies: ['Reading', 'Cooking', 'Gardening'],
  friends: [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 },
    { name: 'Eva', age: 29 },
  ],
  favoriteColors: {
    primary: 'Blue',
    secondary: 'Green',
  },
  isMarried: false,
  test: [0, { name: 'test', last: 'cano' }],
};

const nestedMixed = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    street: '123 Main Street',
    zipCode: '10001',
  },
  hobbies: ['Reading', 'Cooking'],
  friends: [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 },
    { name: 'Eva', age: 29 },
  ],
};

const nestedMultiLevel = {
  name: 'Jane Smith',
  age: 25,
  address: {
    city: 'Los Angeles',
    street: '456 Oak Avenue',
    zipCode: '90001',
    country: {
      name: 'United States',
      code: 'US',
    },
  },
  hobbies: ['Photography', 'Hiking'],
  friends: [
    {
      name: 'Michael',
      age: 27,
      address: { city: 'San Francisco', zipCode: '94101' },
    },
  ],
};
nestedMultiLevel.address.self = nestedMultiLevel.address;

const circularReference = {
  name: 'Circular Object',
  // reference: null,
};
circularReference.reference = circularReference;

const mixedDataType = {
  name: 'Mixed Data',
  age: 45,
  married: true,
  children: null,
  hobbies: ['Gardening', 'Swimming'],
  car: {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
  },
};

const nestedObjectArray = [
  { name: 'Sarah', age: 33 },
  { name: 'David', age: 29 },
  { name: 'Emily', age: 27 },
];

const nestedObject = {
  level1Prop1: 'Value 1',
  level1Prop2: 'Value 2',
  level1Prop3: 'Value 3',
  level1Prop4: {
    level2Prop1: 'Nested Value 1',
    level2Prop2: 'Nested Value 2',
    level2Prop3: {
      level3Prop1: 'Nested Nested Value 1',
      level3Prop2: 'Nested Nested Value 2',
      level3Prop3: {
        level4Prop1: 'Nested Nested Nested Value 1',
        level4Prop2: 'Nested Nested Nested Value 2',
        level4Prop3: {
          level5Prop1: 'Nested Nested Nested Nested Value 1',
          level5Prop2: 'Nested Nested Nested Nested Value 2',
          // Continue nesting or add more properties at level 5 and beyond
        },
      },
    },
  },
};

export default {
  base,
  nestedMixed,
  nestedMultiLevel,
  circularReference,
  mixedDataType,
  nestedObjectArray,
  nestedObject
};
