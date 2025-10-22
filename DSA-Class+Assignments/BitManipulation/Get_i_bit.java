public class Get_i_bit {
     public static int getBit(int n, int idx) {
        int bitMask = 1 << idx;
        if ((n & bitMask) == 0)
            return 0;
        else
            return 1;
    }
    public static void main(String[] args) {
        System.out.println(getBit(10, 2));
    }
}
