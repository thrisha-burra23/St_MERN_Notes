public class AmstrongNumber {
    class Solution {
    static boolean  armstrongNumber(int n) {
      int len=(int)(Math.floor(Math.log10(n)))+ 1;
      int copy=n;
      int num=0;
      while(n>0){
          int rem=n%10;
          num=num+(int)Math.pow(rem,len);
          n=n/10;
      }
      return (num==copy)?true:false;
    }
}
}
