interface person {
  name : string;
}

interface developer extends person {
  skill : string;
}

const me = {} as developer;


export default me;