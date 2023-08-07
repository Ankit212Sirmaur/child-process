```
    exec command are useful for small execution task like pwd, dir 
    NOT for find / 
    it give an error 
    error: RangeError [ERR_CHILD_PROCESS_STDIO_MAXBUFFER]: stdout maxBuffer length exceeded

    ✅ because all the data are stored in the buffer not in stream pipe
```

