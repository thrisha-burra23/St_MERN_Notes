public class Update_i_bit {
  
    public static int setBit(int n, int idx) {
        int bitMask = 1 << idx;
            return n|bitMask;
    }
    public static int clearBit(int n, int idx) {
        int bitMask = ~(1 << idx);
            return n&bitMask;
    }
    public static int update(int n,int idx,int newBit){
        if(newBit==0)
        return clearBit(n, idx);
        else
        return setBit(n, idx);
    }

    // anothe way of doing
    // n=clear(n,idx);
    // int bitMask=newBit<<i;
    // return n|newBit;
    public static void main(String[] args) {
        System.out.println(update(10, 2, 1));
    }
}


