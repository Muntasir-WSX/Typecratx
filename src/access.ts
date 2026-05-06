//access >> modify

class BankAccount {


    public readonly userId: number;
    public userName: string;
   private userBalance: number;

    constructor
    (
       userId: number,
        userName: string,
      userBalance: number
    ) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
 addBalance (balance: number) {
        this.userBalance += balance;
    }
    
}


const MuntasirBankAccount = new BankAccount(101, "Muntasir", 5000);


MuntasirBankAccount.addBalance(10000); // we can modify the balance but not the userId because it's readonly

console.log(MuntasirBankAccount); // 15000