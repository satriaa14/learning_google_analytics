package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "3031"
	}

	// router := gin.New()

	// router.Use(gin.Logger())
	// router.LoadHTMLGlob("src/index.html")
	// router.Static("/static", "static")

	// router.GET("/", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "index.html", nil)
	// })

	// router.Run(":" + port)

	svr := ":" + port
	fs := http.FileServer(http.Dir("./src"))
	fmt.Printf("Server run at port : %v", port)
	http.Handle("/", fs)
	http.ListenAndServe(svr, nil)
}
