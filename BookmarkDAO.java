import java.sql.*;

public class BookmarkDAO {

    // Database connection details
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/Newsmania";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "root5113";
    // SQL queries
    private static final String INSERT_BOOKMARK_SQL = "INSERT INTO bookmarks (title, description, url, image_url) VALUES (?, ?, ?, ?)";

    // Method to add a bookmark to the database
    public void addBookmark(String title, String description, String url, String imageUrl) {
        try {
            // Explicitly load PostgreSQL driver
            Class.forName("org.postgresql.Driver");

            try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                 PreparedStatement preparedStatement = connection.prepareStatement(INSERT_BOOKMARK_SQL)) {
                
                // Set parameters for the SQL query
                preparedStatement.setString(1, title);
                preparedStatement.setString(2, description);
                preparedStatement.setString(3, url);
                preparedStatement.setString(4, imageUrl);
                
                // Execute the insert query
                int rowsAffected = preparedStatement.executeUpdate();
                if (rowsAffected > 0) {
                    System.out.println("Bookmark added successfully!");
                } else {
                    System.out.println("Failed to add bookmark.");
                }
            }
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // Method to fetch all bookmarks from the database
    public void getAllBookmarks() {
        String selectBookmarksSQL = "SELECT * FROM bookmarks";
        try {
            // Explicitly load PostgreSQL driver
            Class.forName("org.postgresql.Driver");

            try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                 Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(selectBookmarksSQL)) {
                
                while (resultSet.next()) {
                    String title = resultSet.getString("title");
                    String description = resultSet.getString("description");
                    String url = resultSet.getString("url");
                    String imageUrl = resultSet.getString("image_url");
                    
                    // Print each bookmark
                    System.out.println("Title: " + title);
                    System.out.println("Description: " + description);
                    System.out.println("URL: " + url);
                    System.out.println("Image URL: " + imageUrl);
                    System.out.println("----------------------------");
                }
            }
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // Main method to test the functionality
    public static void main(String[] args) {
        BookmarkDAO bookmarkDAO = new BookmarkDAO();

        // Example of adding a bookmark
        bookmarkDAO.addBookmark(
                "Example News Article",
                "This is an example description of the news article.",
                "https://www.example.com",
                "https://www.example.com/image.jpg"
        );

        // Fetch all bookmarks from the database
        bookmarkDAO.getAllBookmarks();
    }
}