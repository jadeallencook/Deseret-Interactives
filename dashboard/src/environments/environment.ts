// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  almanac: {
    // location options
    countries: {
      COUNTRY123: 'United States'
    },
    states: {
      STATE123: 'Utah'
    },
    postals: {
      84111: 'LOCATION123'
    },
    // names
    names: {
      NAME123 : {
        first: 'Jade',
        last: 'Cook',
        person: 'PERSON123'
      }
    },
    // dates
    dates: {
      DATE123: {
        month: 12,
        day: 14,
        year: 1991,
        person: {
          deaths: [''],
          births: ['PERSON123']
        },
        callings: {
          starts: [],
          ends: []
        }
      },
      DATE456: {
        month: 12,
        day: 14,
        year: 2001,
        person: {
          deaths: ['PERSON123'],
          births: ['']
        },
        callings: {
          starts: [],
          ends: []
        }
      }
    },
    // locations
    locations: {
      LOCATION123: {
        street1: '123 Test Street',
        street2: '',
        state: 'STATE123',
        postal: 84111,
        country: 'COUNTRY123'
      }
    },
    // callings
    callings: {
      CALLING123: {
        name: 'Test Calling',
        people: ['PERSON123']
      }
    },
    // people
    people: {
      PERSON123: {
        name: 'NAME123',
        birth: {
          date: 'DATE123',
          location: 'LOCATION123'
        },
        death: {
          date: 'DATE456',
          location: 'LOCATION123'
        },
        photo: 'my-photo.jpg',
        bio: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
        callings: ['CALLING123']
      }
    }
  }
};
