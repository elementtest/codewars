//given a cube that is cut cuts times find the number of cubes that have red paint on them (the cube is painted in red)

countSquares = (cuts) => (cuts == 0 ? 1 : 6 * cuts * cuts + 2);