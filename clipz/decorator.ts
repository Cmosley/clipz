function MenuItem(itemID: string) {
  return (target: Function) => {
  target.prototype.id = itemID;
  }
} 

@MenuItem('abcd')
class Pizza {
  id: string;
}

@MenuItem('cheese')
class Hamburger {
  id: string;
}

console.log(new Pizza().id);

