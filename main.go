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
	svr := ":" + port
	fs := http.FileServer(http.Dir("./src"))
	fmt.Printf("Server run at port : %v", port)
	http.Handle("/", fs)
	http.ListenAndServe(svr, nil)
}
