public class Clear_i_bit {
    public static int clearBit(int n, int idx) {
        int bitMask = ~(1 << idx);
            return n&bitMask;
    }
    public static void main(String[] args) {
        System.out.println(clearBit(10, 1));
    }
}
