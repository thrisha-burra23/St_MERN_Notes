// User function Template for Java
//gfg
class Solution {
    int DivisibleByEight(String s) {
        if(s.length()<=3){
           int n=Integer.parseInt(s); 
            if( n%8==0) return 1;
         else return -1;
        }else{
         String num=s.substring(s.length()-3);
         int n=Integer.parseInt(num);
         if( n%8==0) return 1;
         else return -1;
            
        }
        
    }
}