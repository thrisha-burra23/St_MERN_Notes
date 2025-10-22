public class LargestPrimeFActor {
    //gfg
class Solution {
    
    static  boolean isPrime(int n){
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0)
            return false;
        }
        return true;
    }
    static int largestPrimeFactor(int n) {
        int maxPrime=Integer.MIN_VALUE;
        int range=(int)Math.ceil((Math.sqrt(n)));
        if(isPrime(n)){
            return n;
        }
         int it=2;
       while(n>0 && it<=range){
           if(isPrime(it) && n%it==0){
               maxPrime=(maxPrime>it)?maxPrime:it;
               n=n/it;
               if(isPrime(n)){
                   return n;
               }
               it=2;
           }else{
           it++;
               
           }
       }
       return maxPrime;
    }
}
}
