export const generator = (data: any, Component: any) => {
  const newComponent = [];
  for (let item of data) {
    newComponent.push(<Component key={item.id} {...data[item.id]} />);
  }
  return newComponent;
};
