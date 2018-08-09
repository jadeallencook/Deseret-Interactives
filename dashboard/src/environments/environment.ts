// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  almanac: {
    callings: {
      ABC123: {
        name: 'Test Calling',
        people: ['XYX123']
      },
      DEF123: {
        name: 'Another Calling',
        people: ['XYX123']
      }
    },
    people: {
      XYZ123: {
        name: {
          first: 'John',
          last: 'Doe'
        },
        birth: {
          date: '01/01/1950',
          location: {
            street: '123 ABC Street',
            state: 'Utah',
            zip: 84111,
            country: 'United States'
          }
        },
        death: {
          date: '01/01/2010',
          location: {
            street: '123 XYZ Street',
            state: 'Utah',
            zip: 84111,
            country: 'United States'
          }
        },
        photo: 'my-photo.jpg',
        bio: 'Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        callings: ['ABC123']
      }
    }
  }
};
