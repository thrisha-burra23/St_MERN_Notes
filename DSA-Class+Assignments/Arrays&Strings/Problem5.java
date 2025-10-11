import java.util.Scanner;

class Problem5 {

    static boolean  search(int[] arr , int num){       
        
        boolean search=false;

        for(int i=0;i<arr.length;i++){
            if(num==arr[i]){
                search=true;
              
            }
        }
        return search;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] = new int[10];
        for (int i = 0; i < arr.length; i++) {
            
            arr[i] = (int) (Math.random() * 10);
        }
        System.out.println("Enter some value between 1 to 10");
        int num=sc.nextInt();

        while(search(arr,num)==false){
            System.out.println("Can't find the number, enter new number");
            num=sc.nextInt();
            search(arr, num);
        }
       
        System.out.println("number found");
 
        sc.close();
    }
}