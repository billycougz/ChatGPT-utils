function overrideConsoleErrors(messagesToIgnore) {
  const originalConsoleError = console.error;
  console.error = function() {
    const args = Array.prototype.slice.call(arguments);
    const errorMessage = args.join(' ');
    for (let i = 0; i < messagesToIgnore.length; i++) {
      const regex = new RegExp(messagesToIgnore[i]);
      if (regex.test(errorMessage)) {
        return;
      }
    }
    originalConsoleError.apply(console, args);
  }
}
