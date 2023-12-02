// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
Console.clear();




// get file txt file


String line;
try
{
    StreamReader sr = new StreamReader("input_test.txt");
    line = sr.ReadLine();

    while (line != null)
    {
        Console.WriteLine(line);
        line = sr.ReadLine();
    }
    
    //close the file
    sr.Close();
    //Console.ReadLine();
}
catch(Exception e)
{
    // capure Could not find file 
    Console.WriteLine("Exception: " + e.Message);

}
finally
{
    Console.WriteLine("Executing finally block.");
}


