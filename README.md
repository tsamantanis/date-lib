# Date Library

The goal of this package is to handle date operations in a better and more intuitive way than the built in Date Object

## Installation

To install this library, run

### `npm install @tsamantanis/date-lib`

inside your project directory.

## Usage

```
const betterDate = new BetterDate()
```

| ### function 	    | ### sample output 	|
|:------------:	    |:-----------------:	|
|     `.year`    	|        2021       	|
|      `.yr`     	|         21        	|
|    `.month`    	|     September     	|
|     `.mon`     	|        Sep        	|
|     `.day`     	|         26        	|
|    `.hours`    	|         18        	|
|     `.mins`    	|         54        	|
|     `.secs`    	|         32        	|

### format()

| ### input 	| ### example 	|              ### description              	|
|:---------:	|:-----------:	|:-----------------------------------------:	|
|     `Y`     	|     2021    	|           year in 4 digit format          	|
|     `y`     	|      21     	|           year in 2 digit format          	|
|     `M`     	|  September  	|              full month name              	|
|     `m`     	|     Sep     	|      shortened version of month name      	|
|     `D`     	|      02     	|           day in 2 digit format           	|
|     `d`     	|      2      	|                    day                    	|
|     `F`     	|     02nd    	| day in 2 digit format with ordinal prefix 	|
|     `f`     	|      2      	|          day with ordinal prefix          	|
|     `E`     	|  Wednesday  	|                name of day                	|
|     `e`     	|     Wed     	|     shortened name of day of the week     	|
|     `H`     	|      01     	|          hours in 2 digit format          	|
|     `h`     	|      1      	|                   hours                   	|
|     `I`     	|      02     	|         minutes in 2 digit format         	|
|     `i`     	|      2      	|                  minutes                  	|
|     `S`     	|      03     	|         seconds in 2 digit format         	|
|     `s`     	|      3      	|                  seconds                  	|
