**Description**

Beautiful Flatlist with OnScroll and OnClick animation.By using this, user can easily animate their flatlist, they can customise animation’s direction, duration, opacity with different colors. They can customise view by their own and integrate into flatlist.  

**Installation**

using npm:
npm install mindinventory/react-native-card-animation

using yarn:
yarn add @mindinventory/react-native-card-animation

**Supported platform**

* iOS
* Android

**Usage**
```js
// User Data to load in List

const alarmData = [
  {
    id: Math.random(),
    title: 'Hi..',
    time: '06:00 AM',
    bgColor: BLUE,
  },
  {
    id: Math.random(),
    title: 'Hello...',
    time: '06:30 AM',
    bgColor: LIGHT_GREEN,
  },
  {
    id: Math.random(),
    title: 'Hey Wake Up',
    time: '07:00 AM',
    bgColor: YELLOW,
  },
  {
    id: Math.random(),
    title: "It's Morning...",
    time: '08:00 AM',
    bgColor: SKIN,
  },
  {
    id: Math.random(),
    title: 'Have a Breakfast...',
    time: '10:30 AM',
    bgColor: SKYBLUE,
  },
  {
    id: Math.random(),
    title: 'Get ready to go out...',
    time: '11:00 AM',
    bgColor: PURPAL,
  },
  {
    id: Math.random(),
    title: 'Have a great day...',
    time: '11:30 AM',
    bgColor: LIGHT_BLUE,
  },
];

// OnScroll Card Animation Values

const startValue = 100;
const startDegree = '0deg';
const endDegree = '5deg';
const perspectiveValue = 100;

// OnPress Card Animation Values

const duration = 500;
const opacityToVal = 0.5;
const opacityEndVal = 1;
const bounceToVal = 1.1;
const bounceEndVal = 1;
const bgColor = “#1a212f”;
const detailScreenName = 'DetailCard';
const spaceBetween = -25;
const borderRadius = 25;
const shadowRadius = 10;
const shadowOpacity = 1;

// Implementation of  CardAnimation Component 

<CardAnimation
  list={DATA}
  startValue={startValue}
  startDegree={startDegree}
  endDegree={endDegree}
  perspectiveValue={perspectiveValue}
  duration={duration}
  opacityToVal={opacityToVal}
  opacityEndVal={opacityEndVal}
  bounceToVal={bounceToVal}
  bounceEndVal={bounceEndVal}
  backgroundColor={bgColor}
  detailScreenName={detailScreenName}
  spaceBetween={spaceBetween}
  borderRadius={borderRadius}
  shadowRadius={shadowRadius}
  shadowOpacity={shadowOpacity}
  renderCard={item => <CustomCardView item={item} />}
/>
```

**Component props**

| prop              | value        | required/optional	| description                                               |
| ------            | ------       | ------             | ------                                                    |
| list	            | array	       | required	          | List of data which load in FlatList.                      |
| startValue	      | number	     | optional	          | Start value for animation.                                |
| startDegree	      | string	     | optional	          | Start point for animate view.                             |
| endDegree	        | string	     | optional	          | End point for animate view.                               |
| perspectiveValue	| number	     | optional	          | Max range value to tilt view on scaleX.                   |
| duration	        | number	     | optional	          | Animation duration                                        |
| opacityToVal	    | number	     | optional	          | Start value for animate opacity of view.                  |
| opacityEndVal	    | number	     | optional	          | End value for animate opacity of view.                    |
| bounceToVal	      | number	     | optional	          | Start value for animate bounce of view.                   |
| bounceEndVal	    | number	     | optional	          | End value for animate bounce of view.                     |
| backgroundColor	  | string	     | optional	          | It will apply on flatlist background colour.              |
| detailScreenName	| string	     | optional	          | Name of next screen which will navigate from list screen. |
| spaceBetween	    | number	     | optional	          | Increase and decrease the space between list of items.    |
| borderRadius	    | number	     | optional	          | Custom border radius can apply on list of items.          |
| shadowRadius	    | number	     | optional	          | Custom shadow radius can apply on list of items.          |
| shadowOpacity	    | number	     | optional	          | Custom shadow opacity can apply on list of items.         |
| renderCard	      | function	   | required	          | Render custom component in flatlist created by user.      |

**Let us know!**

We would be really happy if you send us links of your projects where you use our component. Just send an email to sales@mindinventory.com and do let us know if you have any questions or suggestion regarding our work.

**Keywords**

react-native flatlist-animaiton animation onScroll-faltlist-animation
