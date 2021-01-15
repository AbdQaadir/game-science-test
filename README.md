# Game Science Assessment - Roll Dice

This project is an assessment for the Frontend Developer Role at Game Science. And it's being built with React. I make use of the [Rolz API](https://rolz.org/help/api) to get the dice data and then show a graphical representation of the dice in the app's UI.

## Stack used

1. React
2. Jest and Enzyme for Testing

## How it looks like

![Roll Dice](./roll-dice.png)

## Process

### The app has mainly two components; a button and a dice component.

1. The button, when pressed fetch the dice data from the api and then update the dice state with the dice number from the api call. Once the state is updated and has a value in it, it then passes it down to the Dice Component

2. The dice component gets the dice value as a prop from the App component and then renders the graphical representation based on the prop.

## To run and test this app, these are the available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

I also implemented testing with Jest and Enzyme. To test the project, run `yarn test`.\ This will launch the test runner in the interactive watch mode.

```

```
