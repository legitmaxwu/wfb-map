## Usage

Clone the repo and install dependencies:

```sh
git clone https://github.com/legitmaxwu/wfb-map.git
yarn
```

To allow the app to use the Mapbox API, make an account on Mapbox and acquire an [access token](https://account.mapbox.com/access-tokens/). Make a `.env` file in the `frontend/` directory and add this line:
```sh
REACT_APP_MAPBOX_ACCESS_TOKEN = '[YOUR_API_KEY]'
```

Start the app!
```sh
yarn run
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
