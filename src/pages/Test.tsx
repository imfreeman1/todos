import React from 'react';
import me from 'src/utils/test';

const Test = () => {
	interface CraftBeer {
		(beer: string): string;
		brand: string;
		brew(): void;
	}

	function myBeer(): CraftBeer {
		const my = function (beer: string) {
			return beer;
		} as CraftBeer;
		my.brand = 'Beer Kitchen';
		my.brew = function () {};
		return my;
	}

	const brewedBeer = myBeer();
	brewedBeer('My First Beer');
	brewedBeer.brand = 'Pangyo Craft';
	brewedBeer.brew();
  enum LogLevel {
    ERROR, WARN, INFO, DEBUG
  }
  
  // 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
  type LogLevelStrings = keyof typeof LogLevel;
  function printImportant(key: LogLevelStrings, message: string) {
      const num = LogLevel[key];
      console.log('num',num);
      if (num <= LogLevel.WARN) {
         console.log('Log level key is: ', key);
         console.log('Log level value is: ', num);
         console.log('Log level message is: ', message);
      }
  }
  printImportant('WARN', 'This is a message');
	return (
		<>
			<div>{me.name}</div>
			<div>{me.skill}</div>
		</>
	);
};

export default Test;
