import java.util.Scanner;

class Problem4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] = new int[10];
        for (int i = 0; i < arr.length; i++) {
            
            arr[i] = (int) (Math.random() * 10);
        }
        System.out.println("Enter some value between 1 to 10");
        int num=sc.nextInt();
        int idx=-1;
        
        boolean search=false;
        for(int i=0;i<arr.length;i++){
            if(num==arr[i]){
                search=true;
                idx=i;
            }
        }

        if(search==true){
            System.out.println("Value found at index "+idx);
               
        }
        else{
            System.out.println("not found");
        }
        sc.close();
    }
}