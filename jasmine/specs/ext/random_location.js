var points = [
{location: {latitude: 32.368943, longitude: -86.292915}, options: {course: 180}},
{location: {latitude: 58.301958, longitude: -134.419595}, options: {course: 180}},
{location: {latitude: 33.456365, longitude: -112.068157}, options: {course: 180}},
{location: {latitude: 34.745421, longitude: -92.28776}, options: {course: 180}},
{location: {latitude: 38.576622, longitude: -121.491051}, options: {course: 180}},
{location: {latitude: 39.738874, longitude: -104.974594}, options: {course: 180}},
{location: {latitude: 41.763886, longitude: -72.682858}, options: {course: 180}},
{location: {latitude: 39.158285, longitude: -75.52248}, options: {course: 180}},
{location: {latitude: 30.436834, longitude: -84.279671}, options: {course: 180}},
{location: {latitude: 33.746039, longitude: -84.387474}, options: {course: 180}},
{location: {latitude: 21.306008, longitude: -157.857771}, options: {course: 180}},
{location: {latitude: 43.61172, longitude: -116.236839}, options: {course: 180}},
{location: {latitude: 39.778464, longitude: -89.645805}, options: {course: 180}},
{location: {latitude: 39.766853, longitude: -86.1549}, options: {course: 180}},
{location: {latitude: 41.5985, longitude: -93.61187}, options: {course: 180}},
{location: {latitude: 39.055451, longitude: -95.687599}, options: {course: 180}},
{location: {latitude: 38.200283, longitude: -84.873533}, options: {course: 180}},
{location: {latitude:  30.457552, longitude: -91.139259}, options: {course: 180}},
{location: {latitude: 44.312057, longitude: -69.772224}, options: {course: 180}},
{location: {latitude: 38.978361, longitude: -76.49148}, options: {course: 180}},
{location: {latitude: 42.358306, longitude: -71.059724}, options: {course: 180}},
{location: {latitude: 42.731379, longitude: -84.555702}, options: {course: 180}},
{location: {latitude: 44.952894, longitude: -93.090305}, options: {course: 180}},
{location: {latitude: 32.297581, longitude: -90.184135}, options: {course: 180}},
{location: {latitude: 38.567596, longitude: -92.174442}, options: {course: 180}},
{location: {latitude: 46.595646, longitude: -112.026951}, options: {course: 180}},
{location: {latitude: 40.806533, longitude: -96.677742}, options: {course: 180}},
{location: {latitude: 39.163076, longitude: -119.764824}, options: {course: 180}},
{location: {latitude: 43.207678, longitude: -71.536217}, options: {course: 180}},
{location: {latitude: 40.221485, longitude: -74.725242}, options: {course: 180}},
{location: {latitude: 35.685745, longitude: -105.938473}, options: {course: 180}},
{location: {latitude: 42.651889, longitude: -73.756084}, options: {course: 180}},
{location: {latitude: 35.771029, longitude: -78.634872}, options: {course: 180}},
{location: {latitude: 46.807345, longitude: -100.783138}, options: {course: 180}},
{location: {latitude: 39.96028, longitude: -82.996445}, options: {course: 180}},
{location: {latitude: 35.465144, longitude: -97.512131}, options: {course: 180}},
{location: {latitude: 44.947913, longitude: -123.009038}, options: {course: 180}},
{location: {latitude: 40.29825, longitude: -76.894784}, options: {course: 180}},
{location: {latitude: 41.823014, longitude: -71.412563}, options: {course: 180}},
{location: {latitude: 34.005356, longitude: -81.028304}, options: {course: 180}},
{location: {latitude: 44.370005, longitude: -100.347161}, options: {course: 180}},
{location: {latitude: 36.161162, longitude: -86.783981}, options: {course: 180}},
{location: {latitude: 30.259067, longitude: -97.742844}, options: {course: 180}},
{location: {latitude: 40.75818, longitude: -111.889}, options: {course: 180}},
{location: {latitude: 44.259462, longitude: -72.575397}, options: {course: 180}},
{location: {latitude: 37.538588, longitude: -77.434502}, options: {course: 180}},
{location: {latitude: 47.045241, longitude: -122.891958}, options: {course: 180}},
{location: {latitude: 38.348926, longitude: -81.631908}, options: {course: 180}},
{location: {latitude: 43.072524, longitude: -89.396124}, options: {course: 180}},
{location: {latitude: 41.150352, longitude: -104.781618}, options: {course: 180}}
];

var randomNumber = parseInt(Math.random() * points.length);
var point = points[randomNumber];
target.setLocationWithOptions(point.location, point.options);
//target.deactivateAppForDuration(2);