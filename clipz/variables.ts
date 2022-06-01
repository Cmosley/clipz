let myName: string | null = null;
myName = 'test'

//array 

let items = ['test', 12];

interface IAccount {
  name: string,
  balance: number, 
  status?: string,
  deposit?: () => void 
}

const account: IAccount = {
  name: 'luis', 
  balance: 10
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
  constructor(
    public name, public balance
  ) {

  }

  private withdraw() {
    
  }

}

//objects 