class AddZeroes {
    public int addDigits(int num) {
        int rem=0,sum=0;
        while(num>0){
            sum+=num%10;
            num=num/10;
           
            }while(sum>9){
                rem+=sum%10;
                sum/=10;}
        return rem;
        }


    }
