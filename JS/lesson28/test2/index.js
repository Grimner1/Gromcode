const favorites = ['id-1', 'id-112'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-11',
      name: 'Products',
      nodes: [
        {
          id: 'id-111',
          name: 'Products',
          nodes: [],
        },

        {
          id: 'id-112',
          name: 'Products',
          nodes: [],
        },
      ],
    },
  ],
};

function markFavorites(tree, favorites) {
  const isFavorites = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorites,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
}

const result = markFavorites(tree, favorites);

console.log(result);
