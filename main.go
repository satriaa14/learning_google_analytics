package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/heroku/x/hmetrics/onload"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("$PORT must be set")
	}

	router := gin.New()
	// router.Use(gin.Logger())
	// router.LoadHTMLGlob("src/*.tmpl.html")
	// router.Static("/static", "static")

	// router.GET("/", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "index.tmpl.html", nil)
	// })

	router.Use(gin.Logger())
	router.LoadHTMLGlob("src/index.html")
	router.Static("/static", "static")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "src/index.html", nil)
	})

	router.Run(":" + port)
}
