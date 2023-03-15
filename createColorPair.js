// Write me a js function named createColorPair that takes an RBG or RGBA color string as an input and returns and object with two properties, 1) baseColor is the provided color string with an opacity set to 1, and 2) backgroundColor is the provided color string with an opacity set to .2

function createColorPair(colorString) {
  // Check if colorString is a valid RGB or RGBA color string
  if (!/^rgba?\(\d{1,3},\s*\d{1,3},\s*\d{1,3}(,\s*(0(\.\d+)?|1(\.0+)?))?\)$/.test(colorString)) {
    throw new Error('Invalid color string');
  }

  // Extract the values for red, green, blue, and alpha from the color string
  const [, r, g, b, a = '1'] = colorString.match(/\d+(\.\d+)?/g);

  // Create the baseColor and backgroundColor strings with the given opacity values
  const baseColor = `rgba(${r}, ${g}, ${b}, 1)`;
  const backgroundColor = `rgba(${r}, ${g}, ${b}, 0.2)`;

  // Return an object with the baseColor and backgroundColor properties
  return { baseColor, backgroundColor };
}
