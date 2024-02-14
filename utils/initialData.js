export const initialTreeData = [
  {
    id: '89915697-ab13-4801-958d-16d737bf003e',
    name: 'Root Level',
    children: [
      {
        id: '6273759d-b042-4045-8a1a-1d9e58a443f7',
        name: 'Root Child',
        children: [],
      },
    ],
  },
];

export const nestedDataSet = (count) => {
  initialTreeData[0].children[0].children = [];
  let currentLevel = initialTreeData[0].children[0].children;

  for (let index = 0; index < count; index++) {
    currentLevel.push({
      id: index.toString(),
      name: `child_${index}`,
      children: [],
    });
    currentLevel = currentLevel[0].children;
  }
  return [initialTreeData];
};

export const largeDataSetShallow = (nodeCount, maxDepth) => {
  const initialData = [{ id: 'root', name: 'Root Level', children: [] }];
  let outerPosition = initialData[0].children;

  for (let index = 0; index < nodeCount; index++) {
    outerPosition.push({
      id: `${index + 1}`,
      name: `Child_${index + 1}`,
      children: [],
    });
    let innerPosition = outerPosition[index].children;
    for (let childIndex = 0; childIndex < maxDepth; childIndex++) {
      innerPosition.push({
        id: `${index + 1}_${childIndex + 1}`,
        name: `Child_${index + 1}_${childIndex + 1}`,
      });
    }
  }
  return [initialData, nodeCount, maxDepth];
};
